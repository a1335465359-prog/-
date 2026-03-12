import { useEffect, useMemo, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Particle = {
    x: number;
    y: number;
    z: number;
    color: string;
    alpha: number;
};

const DEFAULT_SAMPLE_STEP = 4;
const DEFAULT_DEPTH = 160;
const DEFAULT_POINT_SIZE = 2.2;
const DEFAULT_BRIGHTNESS_THRESHOLD = 12;

const instructions = [
    "上传一张图片，系统会采样像素生成粒子云。",
    "按住画布拖拽可旋转视角，形成伪 3D 效果。",
    "调整采样密度与深度，控制粒子的数量与立体感。"
];

export default function DigitalArtLab() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [imageName, setImageName] = useState("");
    const [imageDataUrl, setImageDataUrl] = useState<string | null>(null);
    const [particles, setParticles] = useState<Particle[]>([]);
    const [sampleStep, setSampleStep] = useState(DEFAULT_SAMPLE_STEP);
    const [depth, setDepth] = useState(DEFAULT_DEPTH);
    const [pointSize, setPointSize] = useState(DEFAULT_POINT_SIZE);
    const [brightnessThreshold, setBrightnessThreshold] = useState(DEFAULT_BRIGHTNESS_THRESHOLD);
    const [autoRotate, setAutoRotate] = useState(true);
    const rotationRef = useRef({ x: 0.15, y: -0.6 });
    const isDraggingRef = useRef(false);
    const lastPointerRef = useRef({ x: 0, y: 0 });

    const particleCount = particles.length;

    const scaleHint = useMemo(() => {
        if (!particleCount) {
            return "等待图片上传";
        }
        if (particleCount > 22000) {
            return "粒子数量较多，可提高采样步长优化性能";
        }
        return "粒子数量适中";
    }, [particleCount]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) {
            return;
        }
        const resize = () => {
            const parent = canvas.parentElement;
            if (!parent) {
                return;
            }
            const rect = parent.getBoundingClientRect();
            canvas.width = rect.width * window.devicePixelRatio;
            canvas.height = rect.height * window.devicePixelRatio;
        };
        resize();
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) {
            return;
        }
        const ctx = canvas.getContext("2d");
        if (!ctx) {
            return;
        }
        let animationFrameId = 0;
        const render = () => {
            const { width, height } = canvas;
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = "#050505";
            ctx.fillRect(0, 0, width, height);
            ctx.save();
            ctx.translate(width / 2, height / 2);
            const rotation = rotationRef.current;
            if (autoRotate && !isDraggingRef.current) {
                rotation.y += 0.0025;
            }
            const cosY = Math.cos(rotation.y);
            const sinY = Math.sin(rotation.y);
            const cosX = Math.cos(rotation.x);
            const sinX = Math.sin(rotation.x);
            const fov = 420;
            const scale = window.devicePixelRatio;

            for (const particle of particles) {
                const x1 = particle.x * cosY - particle.z * sinY;
                const z1 = particle.x * sinY + particle.z * cosY;
                const y2 = particle.y * cosX - z1 * sinX;
                const z2 = particle.y * sinX + z1 * cosX;
                const perspective = fov / (fov + z2);
                const drawX = x1 * perspective * scale;
                const drawY = y2 * perspective * scale;
                const radius = pointSize * perspective * scale;

                ctx.globalAlpha = particle.alpha * Math.min(1, perspective + 0.2);
                ctx.fillStyle = particle.color;
                ctx.beginPath();
                ctx.arc(drawX, drawY, radius, 0, Math.PI * 2);
                ctx.fill();
            }

            ctx.restore();
            animationFrameId = window.requestAnimationFrame(render);
        };
        render();
        return () => window.cancelAnimationFrame(animationFrameId);
    }, [particles, autoRotate, pointSize]);

    const buildParticles = (img: HTMLImageElement) => {
        const offscreen = document.createElement("canvas");
        const maxSize = 520;
        const scale = Math.min(maxSize / img.width, maxSize / img.height, 1);
        offscreen.width = Math.round(img.width * scale);
        offscreen.height = Math.round(img.height * scale);
        const ctx = offscreen.getContext("2d");
        if (!ctx) {
            return;
        }
        ctx.drawImage(img, 0, 0, offscreen.width, offscreen.height);
        const imageData = ctx.getImageData(0, 0, offscreen.width, offscreen.height);
        const nextParticles: Particle[] = [];
        const { data, width, height } = imageData;
        for (let y = 0; y < height; y += sampleStep) {
            for (let x = 0; x < width; x += sampleStep) {
                const idx = (y * width + x) * 4;
                const alpha = data[idx + 3] / 255;
                if (alpha < 0.2) {
                    continue;
                }
                const r = data[idx];
                const g = data[idx + 1];
                const b = data[idx + 2];
                const brightness = (r + g + b) / 3;
                if (brightness < brightnessThreshold) {
                    continue;
                }
                const depthOffset = (brightness / 255 - 0.5) * depth;
                nextParticles.push({
                    x: x - width / 2,
                    y: y - height / 2,
                    z: depthOffset,
                    color: `rgb(${r}, ${g}, ${b})`,
                    alpha: alpha
                });
            }
        }
        setParticles(nextParticles);
    };

    useEffect(() => {
        if (!imageDataUrl) {
            return;
        }
        const img = new Image();
        img.onload = () => buildParticles(img);
        img.src = imageDataUrl;
    }, [imageDataUrl, sampleStep, depth, brightnessThreshold]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) {
            return;
        }
        setImageName(file.name);
        const reader = new FileReader();
        reader.onload = () => {
            setImageDataUrl(reader.result as string);
        };
        reader.readAsDataURL(file);
    };

    const handlePointerDown = (event: React.PointerEvent<HTMLCanvasElement>) => {
        isDraggingRef.current = true;
        lastPointerRef.current = { x: event.clientX, y: event.clientY };
    };

    const handlePointerMove = (event: React.PointerEvent<HTMLCanvasElement>) => {
        if (!isDraggingRef.current) {
            return;
        }
        const deltaX = event.clientX - lastPointerRef.current.x;
        const deltaY = event.clientY - lastPointerRef.current.y;
        lastPointerRef.current = { x: event.clientX, y: event.clientY };
        rotationRef.current.y += deltaX * 0.005;
        rotationRef.current.x += deltaY * 0.005;
    };

    const handlePointerUp = () => {
        isDraggingRef.current = false;
    };

    return (
        <div className="min-h-screen bg-neutral-950 text-white">
            <Header />
            <main className="pt-48 pb-16">
                <section className="container mx-auto px-4">
                    <div className="bg-neutral-900/80 border border-white/10 rounded-3xl p-8 shadow-xl">
                        <div className="flex flex-col lg:flex-row gap-10 items-start">
                            <div className="flex-1">
                                <h1 className="text-3xl lg:text-4xl font-semibold mb-4">
                                    数字艺术粒子实验室
                                </h1>
                                <p className="text-white/70 leading-relaxed mb-6">
                                    通过 Canvas 采样图片像素，生成可旋转的粒子云。拖拽画布即可体验伪 3D 的数字艺术效果。
                                </p>
                                <ul className="space-y-3 text-white/70 mb-8">
                                    {instructions.map((item, index) => (
                                        <li key={item} className="flex gap-3">
                                            <span className="w-7 h-7 rounded-full bg-pink-500/20 text-pink-200 flex items-center justify-center text-sm">
                                                {index + 1}
                                            </span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="grid gap-4">
                                    <label className="flex items-center gap-4">
                                        <span className="text-sm text-white/60 w-24">图片上传</span>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleFileChange}
                                            className="flex-1 text-sm text-white/70 file:mr-4 file:rounded-full file:border-0 file:bg-pink-500/80 file:text-white file:px-4 file:py-2 file:text-sm file:font-medium hover:file:bg-pink-500"
                                        />
                                    </label>
                                    <div className="text-xs text-white/40">
                                        当前图片: {imageName || "未选择"}，粒子数: {particleCount}，{scaleHint}
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <label className="flex flex-col gap-2 text-sm text-white/60">
                                            采样步长 ({sampleStep}px)
                                            <input
                                                type="range"
                                                min={2}
                                                max={10}
                                                value={sampleStep}
                                                onChange={(event) => setSampleStep(Number(event.target.value))}
                                                className="accent-pink-400"
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2 text-sm text-white/60">
                                            深度强度 ({depth})
                                            <input
                                                type="range"
                                                min={40}
                                                max={280}
                                                value={depth}
                                                onChange={(event) => setDepth(Number(event.target.value))}
                                                className="accent-pink-400"
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2 text-sm text-white/60">
                                            粒子尺寸 ({pointSize.toFixed(1)})
                                            <input
                                                type="range"
                                                min={1}
                                                max={5}
                                                step={0.1}
                                                value={pointSize}
                                                onChange={(event) => setPointSize(Number(event.target.value))}
                                                className="accent-pink-400"
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2 text-sm text-white/60">
                                            亮度阈值 ({brightnessThreshold})
                                            <input
                                                type="range"
                                                min={0}
                                                max={80}
                                                value={brightnessThreshold}
                                                onChange={(event) => setBrightnessThreshold(Number(event.target.value))}
                                                className="accent-pink-400"
                                            />
                                        </label>
                                    </div>
                                    <label className="flex items-center gap-3 text-sm text-white/60">
                                        <input
                                            type="checkbox"
                                            checked={autoRotate}
                                            onChange={(event) => setAutoRotate(event.target.checked)}
                                            className="accent-pink-400"
                                        />
                                        自动旋转
                                    </label>
                                </div>
                            </div>
                            <div className="flex-1 w-full">
                                <div className="bg-black/80 rounded-2xl border border-white/10 shadow-inner p-4 h-[420px] md:h-[520px]">
                                    <canvas
                                        ref={canvasRef}
                                        onPointerDown={handlePointerDown}
                                        onPointerMove={handlePointerMove}
                                        onPointerUp={handlePointerUp}
                                        onPointerLeave={handlePointerUp}
                                        className="w-full h-full rounded-xl cursor-grab active:cursor-grabbing touch-none"
                                    />
                                </div>
                                <p className="text-xs text-white/40 mt-3">
                                    小提示：如果画面太卡顿，可提高采样步长或降低粒子尺寸。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

interface BadgeProps {
    label: string;
    color: string;
    className?: string;
}

export default function Badge({ label, color, className }: BadgeProps) {
    return (
        <span
            className={`inline-block px-2 py-0.5 uppercase text-sm font-semibold tracking-wide rounded-full bg-${color}-200 text-${color}-600 ${className}`}
        >
            {label}
        </span>
    );
}

import React from "react";

const WaveShape3 = ({ color = "#FF2D2D", flip = false }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%" // Ensure the SVG spans the full width
        height="100" // Keep the original height
        viewBox="0 0 1441 100" // Define the viewBox to control the content's aspect ratio
        preserveAspectRatio="none" // Stretch the SVG to fit the container without preserving aspect ratio
        style={{
            display: "block", // Remove inline-block space
            overflow: "visible", // Allow overflow if needed
            minWidth: "1441px", // Ensure the SVG is at least 1441px wide
            transform: flip ? "rotate(180deg)" : "none", // Apply the flip (rotate 180 degrees)
            transformOrigin: "center", // Keep the rotation centered
        }}
    >
        <g filter="url(#filter0_d_678_2060)">
            <path
                d="M1370.04 64.8445C1419.22 116.742 1464.17 86.4686 1480.5 64.8445V0.499741L-39.5 0.499741V64.8445C-34.8348 43.5721 -13.4087 13.7906 34.9755 64.8445C83.3596 115.898 128.445 86.117 144.939 64.8445C162.1 43.3963 208.618 13.3687 257.402 64.8445C306.186 116.32 351.371 86.2928 367.866 64.8445C385.027 43.5721 431.445 13.7906 479.829 64.8445C528.213 115.898 573.632 86.117 590.293 64.8445C607.287 43.2204 653.572 12.9467 702.756 64.8445C751.94 116.742 796.892 86.4686 813.219 64.8445C830.047 43.2205 875.999 12.9468 925.183 64.8445C974.367 116.742 1019.32 86.4686 1035.65 64.8445C1052.64 43.5721 1098.73 13.7907 1147.11 64.8445C1195.49 115.898 1241.25 86.117 1258.07 64.8445C1274.9 43.2205 1320.85 12.9468 1370.04 64.8445Z"
                fill={color}
            />
        </g>
        <defs>
            <filter id="filter0_d_678_2060" x="-39.5" y="0.499512" width="1526" height="99.0005" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="4" dy="4" />
                <feGaussianBlur stdDeviation="1" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_678_2060" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_678_2060" result="shape" />
            </filter>
        </defs>
    </svg>
);

export default WaveShape3;
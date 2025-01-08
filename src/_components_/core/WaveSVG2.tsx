import React from "react";

const WaveShape2 = ({ color = "#FF2D2D", flip = false }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%" // Ensure the SVG spans the full width
        height="100" // Keep the original height
        viewBox="0 0 1440 98" // Define the viewBox to control the content's aspect ratio
        preserveAspectRatio="none" // Stretch the SVG to fit the container without preserving aspect ratio
        style={{
            display: "block", // Remove inline-block space
            overflow: "visible", // Allow overflow if needed
            minWidth: "1440px", // Ensure the SVG is at least 1440px wide
            transform: flip ? "rotate(180deg)" : "none", // Apply the flip (rotate 180 degrees)
            transformOrigin: "center", // Keep the rotation centered
        }}
    >
        <g filter="url(#filter0_d_678_2061)">
            <path
                d="M98.2165 35.1555C48.0296 -16.7422 2.16097 13.5314 -14.5 35.1555V99.5003H1536.5V35.1555C1531.74 56.4279 1509.88 86.2094 1460.51 35.1555C1411.13 -15.8984 1365.13 13.883 1348.3 35.1555C1330.79 56.6037 1283.32 86.6313 1233.54 35.1555C1183.76 -16.3204 1137.66 13.7072 1120.83 35.1555C1103.31 56.4279 1055.95 86.2094 1006.58 35.1555C957.208 -15.8984 910.864 13.883 893.863 35.1555C876.522 56.7796 829.293 87.0533 779.106 35.1555C728.919 -16.7424 683.05 13.5314 666.389 35.1555C649.219 56.7795 602.33 87.0532 552.143 35.1555C501.956 -16.7422 456.087 13.5314 439.426 35.1555C422.085 56.4279 375.061 86.2093 325.69 35.1555C276.319 -15.8984 229.634 13.883 212.463 35.1555C195.292 56.7795 148.403 87.0532 98.2165 35.1555Z"
                fill={color}
            />
        </g>
        <defs>
            <filter id="filter0_d_678_2061" x="-14.5" y="0.5" width="1557" height="99.0005" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="4" dy="-4" />
                <feGaussianBlur stdDeviation="1" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_678_2061" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_678_2061" result="shape" />
            </filter>
        </defs>
    </svg>
);

export default WaveShape2;
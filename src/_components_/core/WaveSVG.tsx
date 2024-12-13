import React from "react";

const WaveShape = ({ color = "#ffffff" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100"
        viewBox="0 0 1440 98"
        preserveAspectRatio="none"
        style={{ display: "block" }}
    >
        <defs>
            <filter
                id="waveShadow"
                x="-15"
                y="-0.000244141"
                width="1553"
                height="100"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                />
                <feOffset dx="4" dy="4" />
                <feGaussianBlur stdDeviation="1" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
                />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
            </filter>
        </defs>
        <path
            d="M97.7165 30.1961C47.5296 -24.4918 1.66097 7.40946 -15 30.1961L-15 98.0003L1536 98L1536 30.1958C1531.24 52.6119 1509.38 83.9945 1460.01 30.1958C1410.63 -23.6029 1364.63 7.7797 1347.8 30.1958C1330.29 52.7972 1282.82 84.4392 1233.04 30.1959C1183.26 -24.0475 1137.16 7.59449 1120.33 30.1959C1102.81 52.612 1055.45 83.9946 1006.08 30.1959C956.708 -23.6028 910.364 7.77978 893.363 30.1959C876.022 52.9826 828.793 84.8839 778.606 30.1959C728.419 -24.4921 682.55 7.40929 665.889 30.196C648.719 52.9826 601.83 84.8839 551.643 30.196C501.456 -24.4919 455.587 7.40938 438.926 30.196C421.585 52.6121 374.561 83.9947 325.19 30.196C275.819 -23.6026 229.134 7.77994 211.963 30.196C194.792 52.9827 147.903 84.8839 97.7165 30.1961Z"
            fill={color}
            filter="url(#waveShadow)"
        />
    </svg>
);

export default WaveShape;

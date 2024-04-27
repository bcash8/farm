import React from "react";

export const PotSVG = React.forwardRef<SVGSVGElement, { width?: string, height?: string }>((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="90.24 188.59 319.51 282.7"
      preserveAspectRatio="xMidYMid meet"
      {...props}
      ref={ref}
    >
      <path
        d="M-80.518 90.126H80.79l32.164-180.252h-225.91z"
        style={{
          stroke: "#000",
          strokeWidth: 0,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeDashoffset: 0,
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          fill: "#a76432",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="matrix(1.3302 0 0 1.3302 250 351.412)"
      />
      <path
        d="M-108.013 7.12c-3.099-.27-3.099-14.242 0-14.7 3.099-.46 212.647-.46 216.342 0 3.695.458 1.43 13.034 0 14.7-1.43 1.667-213.243.27-216.342 0z"
        style={{
          stroke: "#000",
          strokeWidth: 0,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeDashoffset: 0,
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          fill: "#a76432",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="matrix(1.4479 0 0 2.97854 250 212.197)"
      />
      <path
        d="m-22.186-85.229 13.879-.718S-.55-64.904 7.078-22.236C14.705 20.432 22.186 85.947 22.186 85.947H8.349z"
        style={{
          stroke: "#000",
          strokeWidth: 0,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeDashoffset: 0,
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          fill: "#c27c44",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="matrix(1.38902 0 0 1.38902 130.565 351.915)"
      />
      <path
        d="m-3.617 16.17 14.077-.446-5.79-31.716s-12.87-.4-13.319 0c-.448.4-2.001 2.68-1.792 17.732.21 15.052 1.792 14.166 1.792 14.166z"
        style={{
          stroke: "#000",
          strokeWidth: 0,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeDashoffset: 0,
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          fill: "#c27c44",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="matrix(1.38902 0 0 1.38902 104.772 211.438)"
      />
      <path
        fill="none"
        strokeLinecap="round"
        d="M-107.9-1.28S-55.385 1.164-1.435 1.28c19.07.04 109.335-2.097 109.335-2.097"
        style={{
          stroke: "#56371d",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeDashoffset: 0,
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          fill: "#fff",
          fillOpacity: 0,
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="matrix(1.38902 0 0 1.38902 249.623 235.676)"
      />
    </svg>
  )
}
);
PotSVG.displayName = 'PotSVG';
import React from "react";

export function BranchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <title>Git Branch</title>
      <circle
        cx="160"
        cy="96"
        r="48"
        fill="none"
        stroke="gray"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <circle
        cx="160"
        cy="416"
        r="48"
        fill="none"
        stroke="gray"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <path
        fill="none"
        stroke="gray"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M160 368V144"
      />
      <circle
        cx="352"
        cy="160"
        r="48"
        fill="none"
        stroke="gray"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <path
        d="M352 208c0 128-192 48-192 160"
        fill="none"
        stroke="gray"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </svg>
  );
}

export function RadioIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <circle fill="gray" cx="256" cy="256.02" r="32" />
      <path
        d="M184.25 192.25a96 96 0 000 127.52M327.77 319.77a96 96 0 000-127.52M133.28 141.28a168 168 0 000 229.44M378.72 370.72a168 168 0 000-229.44M435 416a240.34 240.34 0 000-320M77 96a240.34 240.34 0 000 320"
        fill="none"
        stroke="gray"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </svg>
  );
}
export function BlogIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        fill="none"
        stroke="gray"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M368 415.86V72a24.07 24.07 0 0 0-24-24H72a24.07 24.07 0 0 0-24 24v352a40.12 40.12 0 0 0 40 40h328"
      />
      <path
        fill="none"
        stroke="gray"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M416 464a48 48 0 0 1-48-48V128h72a24 24 0 0 1 24 24v264a48 48 0 0 1-48 48z"
      />
      <path
        fill="none"
        stroke="gray"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M240 128h64m-64 64h64m-192 64h192m-192 64h192m-192 64h192"
      />
      <path
        fill="gray"
        d="M176 208h-64a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v64a16 16 0 0 1-16 16z"
      />
    </svg>
  );
}

export function PagesIcon({ className = "" }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="none"
        stroke="gray"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M336 320H32L184 48l152 272zm-70.68-125.49A144 144 0 1 1 192 320"
      />
    </svg>
  );
}

export function SkillsetIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M315.27 33L96 304h128l-31.51 173.23a2.36 2.36 0 002.33 2.77h0a2.36 2.36 0 001.89-.95L416 208H288l31.66-173.25a2.45 2.45 0 00-2.44-2.75h0a2.42 2.42 0 00-1.95 1z"
        fill="none"
        stroke="gray"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </svg>
  );
}

export function ProjectsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        fill="none"
        stroke="gray"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M448 341.37V170.61A32 32 0 0 0 432.11 143l-152-88.46a47.94 47.94 0 0 0-48.24 0L79.89 143A32 32 0 0 0 64 170.61v170.76A32 32 0 0 0 79.89 369l152 88.46a48 48 0 0 0 48.24 0l152-88.46A32 32 0 0 0 448 341.37z"
      />
      <path
        fill="none"
        stroke="gray"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="m69 153.99 187 110 187-110m-187 310v-200"
      />
    </svg>
  );
}

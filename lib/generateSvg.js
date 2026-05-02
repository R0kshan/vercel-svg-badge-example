function generateSvg(name) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="140" height="20">
        <style>
            .label { fill: #555; }
            .value { fill: #0070f3; }
            .text {
                font-family: DejaVu Sans, Arial, sans-serif;
                font-size: 11px;
                fill: #fff;
            }
        </style>

        <rect class="label" width="60" height="20" rx="0"/>
        <rect class="value" x="60" width="80" height="20" rx="0"/>
        <text class="text" x="30" y="14" text-anchor="middle">${name}</text>
        <text class="text" x="100" y="14" text-anchor="middle">vercel ▲</text>
    </svg>`
}

module.exports = { generateSvg }
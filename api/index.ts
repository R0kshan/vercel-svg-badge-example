import type { VercelRequest, VercelResponse } from '@vercel/node'
const { generateSvg } = require('../lib/generateSvg')

export default function handler(req: VercelRequest, res: VercelResponse) {
    const { name = 'World', type = 'svg' } = req.query

    if (type === 'json') {
        return res.json({
            message: `Hello ${name}!`,
        })
    }

    res.setHeader('Content-Type', 'image/svg+xml')
    return res.send(generateSvg(name as string));
}
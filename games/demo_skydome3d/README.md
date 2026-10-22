# demo_skydome3d

skydome3d alone over flat ground, to see what the sky draws and what it costs with nothing else on
the page. The ground is terrain3d's plane y = 0 (`assets/flat.json`) in the vehicles desert's sand,
and the sky is `world.skydome3d` and its prefab in `main.scene.json`.

## The page

`yarn editor demo_skydome3d`, then `localhost:<port>/games/demo_skydome3d/dev.html`, the demo: the
sky's panel at the top right sets every number and colour of the sky's look and its shadow box, and
the sky's clock, rate, day of the year, latitude and moon phase, as it draws.
`localhost:<port>/games/demo_skydome3d/index.html` is the game as it ships.

| Key | What it does |
| --- | --- |
| WASD, Space / C, Shift | fly, rise and sink, faster |
| right-drag, wheel | look, fly pace |

Every number of the eye is in `assets/demo_skydome3d.json`; every number of the sky is in
`main.scene.json`.

The sand is cut from cc0-textures.com's Ground055S by `yarn bake demo_skydome3d`
(`assets/cc0-textures.json`) into `assets/ground/`.

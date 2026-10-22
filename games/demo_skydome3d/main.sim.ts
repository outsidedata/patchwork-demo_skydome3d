// The kinds of main and the main.scene.json file next to this one: the sky alone over flat sand, to
// see what skydome3d draws and what it costs with nothing else on the page. The land is terrain3d's
// field `assets/flat.json`: one `const` node of 0, so the ground is the plane y = 0 everywhere, drawn
// in one ground layer, the vehicles desert's sand (`assets/ground/sand-*.webp`, cut by the bake from
// cc0-textures.com's Ground055S). The sky is skydome3d's `world.skydome3d` and its prefab, the
// weather weather3d's (`world.weather3d`, its prefab and the weathers of `assets/weathers.json`), and
// the clouds clouds3d's (`world.clouds3d`). The kinds: the sky's row, the seat's eye,
// its `player` row, and where it starts, a `start` actor of the scene file, one per slot. Every number
// of the eye that never changes is its definition in `assets/demo_skydome3d.json`, which the scene's
// `world.defs` names.
import type { Scene, Sim } from '#engine/engine.ts'
import { scenemanager } from '#plugins/scenemanager/scenemanager.sim.ts'
import { loader } from '#plugins/loader/loader.sim.ts'
import { skydome3d } from '#plugins/skydome3d/skydome3d.sim.ts'
import { weather3d } from '#plugins/weather3d/weather3d.sim.ts'
import { player } from './player.sim.ts'
import { start } from './start.sim.ts'
import file from './main.scene.json' with { type: 'json' }

export const sim: Sim = { scenemanager, loader, skydome3d, weather3d, player, start }

export const scene = file as Scene

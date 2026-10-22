// demo_skydome3d: the manager booted as its page boots it and main loaded; a seat joins, its `player`
// row, its eye, stands on its slot's start and flies along the way it looks.
import { expect, test } from 'vitest'
import { boot, type Row, type Scene } from '#engine/engine.ts'
import { connection, load, manager, type Down } from '#addons/scenemanager/scenemanager.addon.ts'
import { possessed } from '#addons/player/player.addon.ts'
import { sim } from './demo_skydome3d.sim.ts'
import file from './demo_skydome3d.scene.json' with { type: 'json' }
import main from './main.scene.json' with { type: 'json' }
import defs from './assets/demo_skydome3d.json' with { type: 'json' }

const DT = file.prefabs.engine.dt

test('a seat\'s eye stands on its start and flies the way it looks at its speed', async () => {
  const truth = boot(file as Scene, sim)
  const room = (await load(truth, import.meta.url)).get('main')!
  const heard: Down[] = []
  const seat = connection(manager(truth), d => heard.push(d))
  truth.step(DT)
  const last = heard[heard.length - 1]
  const me = possessed(last.packet.rows)!
  const eye = () => room.rows.find(r => r.id === me.id)! as Row
  const start = main.actors.find(a => a.is === 'start')!
  expect(eye().data.pos).toEqual([start.at![0], defs.player.clear + start.up!, start.at![1]])

  seat.take({ scene: last.scene, seat: last.seat, msg: { seq: 1, n: last.packet.n, id: me.id, action: 'stick', args: [0, -1] } })
  for (let i = 0; i < 60; i++) truth.step(DT)
  // yaw 0 looks along +z, down by the start's pitch
  const run = defs.player.speed * DT * 60
  expect(eye().data.pos[2]).toBeCloseTo(start.at![1] + run * Math.cos(start.pitch!), 6)
  expect(eye().data.pos[0]).toBeCloseTo(start.at![0], 6)
})

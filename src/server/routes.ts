import * as express from 'express';

import DB from './db';
const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

router.get('/api/pointLeaders', async (req, res) => {
  try{
    let sl = await DB.pointLeaders.all();
    res.json(sl);
  } catch(e){
    console.log(e);
    res.sendStatus(500);
  }
})

router.get('/api/reboundLeaders', async (req, res) => {
  try{
    let rl = await DB.reboundLeaders.all();
    res.json(rl);
  } catch(e){
    console.log(e);
    res.sendStatus(500);
  }
})

router.get('/api/assistLeaders', async (req, res) => {
  try{
    let al = await DB.assistLeaders.all();
    res.json(al);
  } catch(e){
    console.log(e);
    res.sendStatus(500);
  }
})

router.get('/api/coachLookup', async (req, res) => {
  try{
    let cl = await DB.coachLookup.all();
    res.json(cl);
  } catch(e){
    console.log(e);
    res.sendStatus(500);
  }
})

router.get('/api/teamLookup', async (req, res) => {
  try{
    let tl = await DB.teamLookup.all();
    res.json(tl);
  } catch(e){
    console.log(e);
    res.sendStatus(500);
  }
})

router.get('/api/playerLookup', async (req, res) => {
  try{
    let pl = await DB.playerLookup.all();
    res.json(pl);
  } catch(e){
    console.log(e);
    res.sendStatus(500);
  }
})

router.get('/api/longestCoaches', async (req, res) => {
  try{
    let lc = await DB.longestCoaches.all();
    res.json(lc);
  } catch(e){
    console.log(e);
    res.sendStatus(500);
  }
})

router.get('/api/sixthMan', async (req, res) => {
  try{
    let sm = await DB.sixthMan.all();
    res.json(sm);
  } catch(e){
    console.log(e);
    res.sendStatus(500);
  }
})

router.get('/api/bestFreeThrowTeam', async (req, res) => {
  try{
    let bftt = await DB.bestFreeThrowTeam.all();
    res.json(bftt);
  } catch(e){
    console.log(e);
    res.sendStatus(500);
  }
})
export default router;

import express from 'express';
import axios from 'axios';
import { getQualifioWsUrl } from '../utils/qualifio';

const router = express.Router();

// Define routes
router.get('/quotes', async (req, res, next) => {
    try {
        const quotes = await axios.get(getQualifioWsUrl());
        res.json(quotes.data);
      }
      catch (err) {
        next(err)
      }
});

export default router;
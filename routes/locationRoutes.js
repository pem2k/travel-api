const router = require('express').Router();
const sequelize = require('../config/connection');
const { Traveller, Location, Trip } = require('../models');

// GET all locations
router.get('/', async (req, res) => {
    try {
      const locationData = await Location.findAll({
        include: [{ model: Traveller }, { model: Location }, { model: Trip }],
        attributes: {
          include: [
            [
              sequelize.literal(
                '()'
              ),
            ],
          ],
        },
      });
      res.status(200).json(locationData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// GET a single location
router.get('/:id', async (req, res) => {
    try {
      const locationData = await Location.findByPk(req.params.id, {
        include: [{ model: Traveller }, { model: Location }, { model: Trip }],
        attributes: {
          include: [
            [
              sequelize.literal(
                '()'
              ),
            ],
          ],
        },
      });
  
      if (!locationData) {
        res.status(404).json({ message: 'No location found with that id!' });
        return;
      }
  
      res.status(200).json(locationData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// CREATE a location
router.post('/', async (req, res) => {
    try {
      const locationData = await Location.create(req.body);
      res.status(200).json(locationData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

// DELETE a location
router.delete('/:id', async (req, res) => {
    try {
      const locationData = await Location.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!locationData) {
        res.status(404).json({ message: 'No location found with that id!' });
        return;
      }
  
      res.status(200).json(locationData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
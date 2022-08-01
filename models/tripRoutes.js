const router = require('express').Router();
const sequelize = require('../../config/connection');
const { traveller, location, trip } = require('../../models');

// GET all trips
router.get('/', async (req, res) => {
    try {
      const tripData = await trip.findAll({
        include: [{ model: traveller-model }, { model: location }, { model: trip }],
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
      res.status(200).json(tripData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// GET a single trip
router.get('/:id', async (req, res) => {
    try {
      const tripData = await trip.findByPk(req.params.id, {
        include: [{ model: traveller-model }, { model: location }, { model: trip }],
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
  
      if (!tripData) {
        res.status(404).json({ message: 'No trip found with that id!' });
        return;
      }
  
      res.status(200).json(tripData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// CREATE a trip
router.post('/', async (req, res) => {
    try {
      const tripData = await trip.create(req.body);
      res.status(200).json(tripData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

// DELETE a trip
router.delete('/:id', async (req, res) => {
    try {
      const tripData = await trip.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!tripData) {
        res.status(404).json({ message: 'No trip found with that id!' });
        return;
      }
  
      res.status(200).json(tripData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
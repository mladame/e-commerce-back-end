const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll();
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    
  } catch (err) {
    
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    
  } catch (err) {
    
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    
  } catch (err) {
    
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    
  } catch (err) {
    
  }
});

module.exports = router;

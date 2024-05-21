"use strict";
const axios = require('axios'); 

const API_URL = 'https://api.breakingbadquotes.xyz/v1/quotes';

exports.getQuotes = async (req, res) => {
try {

    const page = req.query.page || 1;

    const response = await axios.get(`${API_URL}/quotes?\_page=${page}`);

    res.json(response.data);

} catch (error) {

    res.status(500).json({ message: 'Error fetching posts', error: error.message });

}
};

exports.updateQuotes = async (req, res) => {
try {

    const { id } = req.params;

    const response = await axios.put(`${API_URL}/quotes/${id}`, req.body);

    res.json(response.data);

} catch (error) {

    res.status(500).json({ message: 'Error updating post', error: error.message });

}
};
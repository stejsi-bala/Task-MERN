const products = []

const getProducts = (req, res) => {
    res.status(200).json(products)
}

const getProduct = (req, res) => {
    res.status(200).json({
        message: `Produkti ${req.params.id}`
    })
}

const createProduct = (req, res) => {

    if (!req.body.name) {
        res.status(400)
        throw new Error('Ju lutem shkruani emrin')
    }

    if (req.body.price <= 0) {
        res.status(400)
        throw new Error('Price duhet me i madh se 0')
    }

    if (req.body.stock < 0) {
        res.status(400)
        throw new Error('Stock nuk mund te jete negativ')
    }

    products.push(req.body)

    res.status(201).json({
        message: 'Produkti i krijuar',
        data: req.body
    })
}

const updateProduct = (req, res) => {
    res.status(200).json({
        message: `Produkti ${req.params.id} u perditesua`
    })
}

const deleteProduct = (req, res) => {
    res.status(200).json({
        message: `Produkti ${req.params.id} u fshi`
    })
}

const searchProducts = (req, res) => {
    res.status(200).json({
        message: `Kerkim per ${req.query.q}`
    })
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    searchProducts
}
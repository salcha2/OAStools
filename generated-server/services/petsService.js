export function getBicicletas(req, res) {
    res.send([{
        year: 2019,
        province: "Sevilla"
    }]
    );
}

export function addBicicleta(req, res) {
    res.send({
        message: 'This is the mockup controller for addBicicleta'
    });
}

export function findByyear(req, res) {
    res.send({
        message: 'This is the mockup controller for findByyear'
    });
}

export function updateBicicleta(req, res) {
    res.send({
        message: 'This is the mockup controller for updateBicicleta'
    });
}

export function deleteBicicleta(req, res) {
    res.send({
        message: 'This is the mockup controller for deleteBicicleta'
    });
}


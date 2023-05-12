import * as service from '../services/petsService.js';

export function getBicicletas(req, res) {
    service.getBicicletas(req, res);
}

export function addBicicleta(req, res) {
    service.addBicicleta(req, res);
}

export function findByyear(req, res) {
    service.findByyear(req, res);
}

export function updateBicicleta(req, res) {
    service.updateBicicleta(req, res);
}

export function deleteBicicleta(req, res) {
    service.deleteBicicleta(req, res);
}


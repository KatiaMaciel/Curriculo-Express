const CurriculoModel = require('../models/curriculo-models');

exports.getData = () => {
    return CurriculoModel;
}

exports.getName = () => {
    return CurriculoModel.name;
}

exports.getTitle = () => {
    return CurriculoModel.title;
}

exports.getMobile = () => {
    return CurriculoModel.mobile;
}

exports.getEmail = () => {
    return CurriculoModel.email;
}

exports.getProfession = () => {
    return CurriculoModel.profession;
}

exports.getDescription = () => {
    return CurriculoModel.description;
}

exports.getExperience = () => {
    return CurriculoModel.experience;
}

exports.getEducation = () => {
    return CurriculoModel.education;
}

exports.getLanguage = () => {
    return CurriculoModel.language;
}

exports.getSkills = () => {
    return CurriculoModel.skills;
}
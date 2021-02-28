"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var class_1 = __importDefault(require("./class"));
var content_1 = __importDefault(require("./content"));
var Lesson = /** @class */ (function () {
    function Lesson() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], Lesson.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Lesson.prototype, "description", void 0);
    __decorate([
        typeorm_1.CreateDateColumn({ name: 'created_At' }),
        __metadata("design:type", Date)
    ], Lesson.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn({ name: 'updated_At' }),
        __metadata("design:type", Date)
    ], Lesson.prototype, "updatedAt", void 0);
    __decorate([
        typeorm_1.OneToOne(function () { return content_1.default; }, function (content) { return content.lesson; }),
        __metadata("design:type", content_1.default)
    ], Lesson.prototype, "content", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return class_1.default; }, function (classe) { return classe.lessons; }),
        __metadata("design:type", class_1.default)
    ], Lesson.prototype, "classe", void 0);
    Lesson = __decorate([
        typeorm_1.Entity()
    ], Lesson);
    return Lesson;
}());
exports.default = Lesson;

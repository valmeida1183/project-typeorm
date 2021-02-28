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
var lesson_1 = __importDefault(require("./lesson"));
var Class = /** @class */ (function () {
    function Class() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], Class.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            length: 100,
            unique: true,
        }),
        __metadata("design:type", String)
    ], Class.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Class.prototype, "duration", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Class.prototype, "semester", void 0);
    __decorate([
        typeorm_1.CreateDateColumn({ name: 'created_At' }),
        __metadata("design:type", Date)
    ], Class.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn({ name: 'updated_At' }),
        __metadata("design:type", Date)
    ], Class.prototype, "updatedAt", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return lesson_1.default; }, function (lesson) { return lesson.classe; }),
        __metadata("design:type", Array)
    ], Class.prototype, "lessons", void 0);
    Class = __decorate([
        typeorm_1.Entity() // @Entity('classes') caso o nome da tabela no bd seja diferente da entitade.
    ], Class);
    return Class;
}());
exports.default = Class;

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
var Content = /** @class */ (function () {
    function Content() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], Content.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 250 }),
        __metadata("design:type", String)
    ], Content.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 45 }),
        __metadata("design:type", String)
    ], Content.prototype, "linkContent", void 0);
    __decorate([
        typeorm_1.OneToOne(function () { return lesson_1.default; }, function (lesson) { return lesson.content; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", lesson_1.default)
    ], Content.prototype, "lesson", void 0);
    Content = __decorate([
        typeorm_1.Entity()
    ], Content);
    return Content;
}());
exports.default = Content;

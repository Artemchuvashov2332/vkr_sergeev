import { DataTypes } from 'sequelize'
import { sequelize } from '../db'

export const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    login: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, defaultValue: 'USER' }
})

export const Basket = sequelize.define('basket', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

export const BasketProduct = sequelize.define('basket_product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

export const Product = sequelize.define('product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    price: { type: DataTypes.INTEGER, defaultValue: 0, allowNull: false },
    rating: { type: DataTypes.INTEGER, defaultValue: 0 },
    image: { type: DataTypes.STRING, allowNull: false },
})

export const ProductInfo = sequelize.define('product_info', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
})

export const Category = sequelize.define('category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    code: { type: DataTypes.STRING, unique: true, allowNull: false },
    title: { type: DataTypes.STRING, unique: true, allowNull: false },
    image: { type: DataTypes.STRING, allowNull: false },
})

export const Type = sequelize.define('type', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    code: { type: DataTypes.STRING, unique: true, allowNull: false },
    title: { type: DataTypes.STRING, unique: true, allowNull: false },
    image: { type: DataTypes.STRING, allowNull: false },
})

const TypeCategory = sequelize.define('type_category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

export const Rating = sequelize.define('rating', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    mark: { type: DataTypes.INTEGER, allowNull: false }
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketProduct)
BasketProduct.belongsTo(Basket)

Type.hasMany(Product)
Product.belongsTo(Type)

Category.hasMany(Product)
Product.belongsTo(Category)

Product.hasMany(Rating)
Rating.belongsTo(Product)

Product.hasMany(BasketProduct)
BasketProduct.belongsTo(Product)

Product.hasMany(ProductInfo)
ProductInfo.belongsTo(Product)

Type.belongsToMany(Category, { through: TypeCategory })
Category.belongsToMany(Type, { through: TypeCategory })

export default {
    User,
    Basket,
    Product,
    ProductInfo,
    BasketProduct,
    Category,
    Type,
    TypeCategory,
    Rating
}
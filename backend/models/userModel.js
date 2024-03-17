module.exports = (Sequelize, DataTypes ) => {
    const User = sequelize.define("user", {
        userName : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type:DataTypes.STRING,
            unique:true,
            isEmail: true,
            allowNull: false
        },
        passwords: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {timestamps: true}, )
    return User;
}
import { StyleSheet } from "react-native"

export default StyleSheet.create ({
    loginCentralizar:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: '100%'
    },
    logoMercado:{
        marginBottom: 60,
        height: 100,
        width: 320,
    },
    fundoLogin:{
        backgroundColor: '#8907',
    },
    inputLogin:{
        paddingStart: 20,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 25,
        width: 320,
        height: 45,
        fontSize: 18,
    },
    EsqueceuS:{
        margin: 10,
        color: '#fff',
        fontSize: 15,
    },
    loginButton:{
        marginTop: 30,
        height: 50,
        width: 200,
        backgroundColor: 'rgb(0, 125, 71)',
        borderRadius: 20,
        borderColor: '#fff',
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
        padding: 4,
    },
    textButtonLogin:{
        textAlign: 'center',
        fontSize: 18,
        color: '#fff'
    }
})
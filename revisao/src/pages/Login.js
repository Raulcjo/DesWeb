import { KeyboardAvoidingView, Image, TextInput, View, Text, TouchableOpacity } from "react-native";
import Estilo from "../components/Estilo";



export default props => {
    return (
        <KeyboardAvoidingView style={Estilo.loginCentralizar}>
            <View style={[Estilo.loginCentralizar, Estilo.fundoLogin]}>
                <Image source={require('../assets/logo.png')} style={Estilo.logoMercado}/>
                <TextInput
                    placeholder="Coloque seu Login"
                    style={Estilo.inputLogin}
                />
                <TextInput
                    placeholder="Coloque sua Senha"
                    style={Estilo.inputLogin}
                />

                <Text style={Estilo.EsqueceuS}>Esqueceu a senha?</Text>

                <TouchableOpacity style={Estilo.loginButton}>
                    <Text style={Estilo.textButtonLogin}>Login</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>

    )
}
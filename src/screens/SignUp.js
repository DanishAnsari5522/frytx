import { View, Text, Button, StyleSheet, Dimensions, Image, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import Container from '../components/Container'
import { CONTAINER_OUTER_SPACING } from '../config/constants'
import SignUpScreenImage from '../../assets/SignUpScreenImage.png'
import Icon from '@expo/vector-icons/MaterialIcons'
export default function Signup({ navigation }) {
    const [email, onChangeEmail] = useState('')
    const [password, onChangePassword] = useState('')
    const [fullname, onChangeFullname] = useState('')
    const [companyname, onChangeCompanyname] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setSuccess('')

        const isValidEmail = /\S+@\S+\.\S+/.test(email);
        if (!isValidEmail) {
            setError("Invalid Email")
        } else if (!password) {
            setError("Password Required")
        } else if (!fullname) {
            setError("FullName Required")
        } else if (!companyname) {
            setError("companyname Required")
        } else {
            setSuccess("Done")
        }
    }
    return (
        <ScrollView>
            <Container style={styles.container}>

                <Image source={SignUpScreenImage} resizeMode="cover" style={styles.Loginimmg} />
                <View style={styles.logincomp}>
                    <Text style={styles.logintext}>Sign Up</Text>
                    {error && <Text style={styles.error}>{error}</Text>}
                    {success && <Text style={styles.success}>{success}</Text>}
                    <View style={styles.inputcomp}>
                        <Icon name="person" color='gray' size={22} style={styles.attherate} />
                        <TextInput placeholder="Full Name" style={styles.input1} value={fullname} onChangeText={onChangeFullname}></TextInput>
                    </View>
                    <View style={styles.inputcomp}>
                        <Icon name="mail" color='gray' size={22} style={styles.attherate} />
                        <TextInput placeholder="Email Id" style={styles.input1} value={email} onChangeText={onChangeEmail}></TextInput>
                    </View>

                    <View style={styles.inputcomp}>
                        <Icon name="lock" color='gray' size={22} style={styles.attherate} />
                        <TextInput secureTextEntry={true} placeholder="Password" style={styles.input1} value={password} onChangeText={onChangePassword}></TextInput>
                    </View>
                    <View>
                        <Text style={styles.loginbtn} onPress={handleSubmit}>Sign Up</Text>
                    </View>
                    <Text style={styles.forRegister}>already have an account? <Text onPress={() => { navigation.navigate("Login") }} style={styles.forRegisterlink}>Login</Text></Text>
                </View>

            </Container>
        </ScrollView>
    )
}

const { width } = Dimensions.get("window")

const styles = StyleSheet.create({
    container: {
        width,
        alignItems: "center",
        justifyContent: "space-between",
        padding: CONTAINER_OUTER_SPACING,
    },
    error: {
        color: 'red'
    },
    success: {
        color: 'green'
    },
    Loginimmg: {
        width,
        height: 350,
        marginBottom: 0
    },
    logincomp: {
        width: '100%',
        marginBottom: 80

    },
    inputcomp: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderBottomColor: 'gray',
        paddingBottom: 0,
        marginTop: 20,
        borderRadius: 4,
        paddingLeft: 4
    },
    attherate: {
        width: 22,
        height: 22,
        opacity: 0.5
    },
    lock: {
        width: 27,
        height: 27,
        opacity: 0.5
    },
    input1: {
        height: 50,
        fontSize: 16,
        width: '100%',
        marginLeft: 10
    },

    logintext: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10
    },
    loginbtn: {
        backgroundColor: '#fea9a9',
        color: 'white',
        width: '100%',
        height: 50,
        textAlign: 'center',
        alignSelf: 'center',
        borderRadius: 9,
        paddingTop: 11,
        marginTop: 20,
        fontSize: 16
    },
    forRegister: {
        marginTop: 60,
        alignSelf: 'center'
    },
    forRegisterlink: {
        color: 'blue'
    },
    // forgot
    forgot: {
        position: 'absolute',
        right: 25,
        top: 20,
        fontSize: 16,
        color: 'blue',
    }
})
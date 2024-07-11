import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import CustomCheckbox from '../../componentes/SquareCheckbox';
import CircleCheckbox from "../../componentes/CircleCheckbox";
import Woman from '../../imagens/missoes/woman.jpg';
import QrCode from '../../imagens/missoes/qr-code-scan-icon.svg';
import Camera from '../../imagens/missoes/camera.svg';

export default function TelaMissoes() {
    const [isVerifying, setIsVerifying] = useState(false);
    const [code, setCode] = useState("");
    const [isCodeSent, setIsCodeSent] = useState(false);
    const [isQRCodeScanned, setIsQRCodeScanned] = useState(false); // Novo estado para QR Code
    const [isDailyChecked, setIsDailyChecked] = useState(false);
    const [showDailyMissions, setShowDailyMissions] = useState(true); // Novo estado para alternar entre missões diárias e semanais
    const [tasks, setTasks] = useState([
        { id: 1, text: "Faça login no app diariamente", completed: false, imageSent: false },
        { id: 2, text: "Responda a uma pesquisa", completed: false, imageSent: false },
        { id: 3, text: "Compartilhe o app nas redes", completed: false, imageSent: false }
    ]);
    const [weeklyTasks, setWeeklyTasks] = useState([
        { id: 1, text: "Visite o Shopping 3 vezes na semana", completed: false, imageSent: false },
        { id: 2, text: "Compre em qualquer loja participante", completed: false, imageSent: false },
        { id: 3, text: "Convide um amigo para se inscrever no Viva ", completed: false, imageSent: false }
    ]);
    const [dailyCode, setDailyCode] = useState("");

    const handleSendCode = () => {
        setIsVerifying(false);
        setIsCodeSent(true);
    };

    const handleQRCodeScan = () => {
        setIsQRCodeScanned(true);
        setIsVerifying(false);
    };

    const handleImageSend = (task) => {
        task.imageSent = true;
        setTasks([...tasks]);
        setWeeklyTasks([...weeklyTasks]);
    };

    const handleTaskCheck = (task) => {
        if (task.imageSent) {
            task.completed = !task.completed;
            setTasks([...tasks]);
            setWeeklyTasks([...weeklyTasks]);
        }
    };

    const handleDailyCodeSend = () => {
        setDailyCode("");
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>MISSÕES</Text>
                <View style={styles.textoImagem}>
                    <View style={styles.comprimento}>
                        <Text style={styles.headerText}>Olá, Alana!</Text>
                        <Text style={styles.subHeaderText}>Bem-vinda!</Text>
                    </View>
                    <View style={styles.shadowContainer}>
                        <Image style={styles.headerImage} source={Woman} />
                    </View>
                </View>
            </View>
            <View style={styles.mainContainer}>
                <View style={styles.flashMissionContainer}>
                    <Text style={styles.flashMissionTitle}>Missão Flash</Text>
                    <Text style={styles.flashMissionDescription}>Assista a um filme no cinema</Text>
                    <Text style={styles.flashMissionPoints}>+200 pontos</Text>
                    {isCodeSent ? (
                        <Text style={styles.codeSentMessage}>Código enviado com sucesso!</Text>
                    ) : isQRCodeScanned ? (
                        <Text style={styles.codeSentMessage}>QR code escaneado com sucesso!</Text>
                    ) : (
                        <>
                            {isVerifying ? (
                                <View style={styles.verificationContainer}>
                                    <TextInput
                                        style={styles.codeInput}
                                        placeholder="Insira o código"
                                        placeholderTextColor={'#e24443'}
                                        value={code}
                                        onChangeText={setCode}
                                    />
                                    <TouchableOpacity style={styles.sendButton} onPress={handleSendCode}>
                                        <Text style={styles.sendButtonText}>Enviar</Text>
                                    </TouchableOpacity>
                                </View>
                            ) : (
                                <View style={styles.buttons}>
                                    <TouchableOpacity style={styles.verifyButton} onPress={() => setIsVerifying(true)}>
                                        <Text style={styles.verifyButtonText}>Verificar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.qrcodeButton} onPress={handleQRCodeScan}>
                                        <QrCode width="20" height="20" />
                                    </TouchableOpacity>
                                </View>
                            )}
                        </>
                    )}
                </View>

                <TouchableOpacity style={styles.dailyCheckIn} onPress={() => setIsDailyChecked(!isDailyChecked)}>
                    <CircleCheckbox isChecked={isDailyChecked} onPress={() => setIsDailyChecked(!isDailyChecked)} />
                    <Text style={styles.dailyCheckInText}>Clique para fazer o Check In Diário</Text>
                </TouchableOpacity>

                <View style={styles.missionsHeader}>
                    <TouchableOpacity style={styles.typeMission} onPress={() => setShowDailyMissions(true)}>
                        <Text style={[styles.sectionTitle, showDailyMissions && styles.activeSectionTitleBlue]}>
                            Missões Diárias
                        </Text>
                        {showDailyMissions && <View style={styles.underlineBlue}></View>}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.typeMission} onPress={() => setShowDailyMissions(false)}>
                        <Text style={[styles.sectionTitle, !showDailyMissions && styles.activeSectionTitleRed]}>
                            Missões Semanais
                        </Text>
                        {!showDailyMissions && <View style={styles.underlineRed}></View>}
                    </TouchableOpacity>
                </View>

                {showDailyMissions ? (
                    tasks.map((task) => (
                        <View key={task.id} style={styles.taskContainer}>
                            <View style={styles.taskContent}>
                                <CustomCheckbox isChecked={task.completed} onPress={() => handleTaskCheck(task)} />
                                <Text style={styles.taskText}>{task.text}</Text>
                                {!task.imageSent && (
                                    <TouchableOpacity style = {styles.iconPosition} onPress={() => handleImageSend(task)}>
                                        <Camera style={styles.cameraIcon}/>
                                    </TouchableOpacity>
                                )}
                            </View>
                            <View style={styles.lineView} />
                        </View>
                    ))
                ) : (
                    weeklyTasks.map((task) => (
                        <View key={task.id} style={styles.taskContainer}>
                            <View style={styles.taskContent}>
                                <CustomCheckbox isChecked={task.completed} onPress={() => handleTaskCheck(task)} />
                                <Text style={styles.taskText}>{task.text}</Text>
                                {!task.imageSent && (
                                    <TouchableOpacity style = {styles.iconPosition} onPress={() => handleImageSend(task)}>
                                        <Camera style={styles.cameraIcon}/>
                                    </TouchableOpacity>
                                )}
                            </View>
                            <View style={styles.lineView} />
                        </View>
                    ))
                )}

                <View style={styles.dailyCodeContainer}>
                    <TextInput
                        style={styles.dailyCodeInput}
                        placeholder="Insira o código"
                        value={dailyCode}
                        onChangeText={setDailyCode}
                    />
                    <TouchableOpacity style={styles.sendButton} onPress={handleDailyCodeSend}>
                        <Text style={styles.sendButtonText}>Enviar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#76B9D3"
    },
    header: {
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 52,
        backgroundColor: "#76B9D3",
    },
    textoImagem: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
        gap: 25
    },
    comprimento: {
        flexDirection: "column",
    },
    headerImage: {
        width: 91,
        height: 91,
        borderRadius: 45.5,
        borderWidth: 2,  
        borderColor: 'white'
    },
    shadowContainer: {
        marginLeft: 110,
        marginRight: 30,
        width: 91,
        height: 91,
        borderRadius: 45.5,
        marginLeft: 110,
        marginRight: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowRadius: 6,
        elevation: 5,
        shadowOpacity: 0.17
    },
    headerText: {
        fontSize: 19,
        fontWeight: "bold",
        color: 'white',
        marginLeft: 40
    },
    subHeaderText: {
        fontSize: 17,
        color: 'white',
        marginLeft: 40
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#004d85",
        textAlign: "center",
        marginBottom: 10,
    },
    mainContainer: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        borderTopLeftRadius: 60, // para aplicar border radius apenas nas pontas do container
        borderTopRightRadius: 60
    },
    flashMissionContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FED131",
        borderRadius: 10,
        padding: 12,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowRadius: 8,
        elevation: 12,
        shadowOpacity: 0.28
    },
    flashMissionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#004d85",
        textAlign: "center",
        marginBottom: 10,
    },
    flashMissionDescription: {
        fontWeight: "500",
        fontSize: 14,
        color: "#3c3a3a",
        textAlign: "center",
        marginBottom: 10,
    },
    flashMissionPoints: {
        fontSize: 22,
        fontWeight: "800",
        color: "#fe3131",
        textAlign: "center",
        marginBottom: 10,
    },
    verifyButton: {
        backgroundColor: "#e24443",
        borderRadius: 10,
        width: 60,
        height: 30,
        alignItems: "center",
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 6,
        elevation: 5,
        shadowOpacity: 0.18
    },
    verifyButtonText: {
        color: "#fff",
        fontSize: 12
    },
    qrcodeButton: {
        backgroundColor: "#e24443",
        borderRadius: 10,
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 6,
        elevation: 5,
        shadowOpacity: 0.18
    },
    verificationContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    codeInput: {
        borderColor: "#e24443",
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        width: 150,
        height: 35,
        fontSize: 12
    },
    buttons: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8
    },
    sendButton: {
        backgroundColor: "#e24443",
        borderRadius: 10,
        width: 60,
        height: 30,
        alignItems: "center",
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 6,
        elevation: 5,
        shadowOpacity: 0.18
    },
    sendButtonText: {
        color: 'white'
    },
    codeSentMessage: {
        fontSize: 16,
        color: "#3c3a3a",
        textAlign: "center",
    },
    dailyCheckIn: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 25,
        marginTop: 5,
        marginLeft: 28,
        marginRight: 5,
        gap: 10
    },
    dailyCheckInText: {
        fontSize: 16,
        color: "#004d85",
        marginRight: 10,
    },
    missionsHeader: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "rgba(94, 94, 94, 0.61)",  
    },
    activeSectionTitleRed: {
        fontSize: 18,
        color: "#e24443",
        fontWeight: "700"
    },
    activeSectionTitleBlue: {
        fontSize: 18,
        color: "#004d85",
        fontWeight: "700"
    },
    typeMission: {
        alignItems: "center",
    },
    underlineRed: {
        height: 1.8,
        width: "100%",
        backgroundColor: "#e24443",
        marginTop: 2
    },
    underlineBlue: {
        height: 1.8,
        width: "100%",
        backgroundColor: "#004d85",
        marginTop: 2
    },
    taskContainer: {
        flexDirection: "column",
        marginBottom: 15,
        marginLeft: 10,
        gap: 10
    },
    taskContent: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    taskText: {
        fontSize: 16,
        color: "#3c3a3a",
        maxWidth: 260
    },
    lineView: {
        borderStyle: "solid",
        borderColor: "rgba(94, 94, 94, 0.33)",
        borderTopWidth: 1,
        width: "100%",
        height: 1
    },
    iconPosition: {
        position: 'absolute',
        zIndex: 1,
        left: 320,
    },
    cameraIcon: {
        width: 27,
        height: 27,
    },
    dailyCodeContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },
    dailyCodeInput: {
        borderColor: "#e24443",
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        width: 200,
    },
});

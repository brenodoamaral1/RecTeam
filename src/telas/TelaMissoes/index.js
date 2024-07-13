import React, { useState, useRef } from "react";
import { StyleSheet, View, Text, ScrollView, Image, TextInput, KeyboardAvoidingView, TouchableOpacity, Platform } from "react-native";
import CustomCheckbox from '../../componentes/SquareCheckbox';
import CircleCheckbox from "../../componentes/CircleCheckbox";
import Woman from '../../imagens/missoes/woman.jpg';
import QrCode from '../../imagens/missoes/qr-code-scan-icon.svg';
import QrCode2 from '../../imagens/missoes/qrCode2.svg';

export default function TelaMissoes() {
    const [isVerifying, setIsVerifying] = useState(false);
    const [code, setCode] = useState("");
    const [isCodeSent, setIsCodeSent] = useState(false);
    const [isCodeSent2, setIsCodeSent2] = useState(false);
    const [isQRCodeScanned, setIsQRCodeScanned] = useState(false); 
    const [isDailyChecked, setIsDailyChecked] = useState(false);
    const [showDailyMissions, setShowDailyMissions] = useState(true); 
    const dailyCodeInputRef = useRef(null);
    const [tasks, setTasks] = useState([
        { id: 1, text: "Faça login no app diariamente", completed: false, imageSent: false, size: 3},
        { id: 2, text: "Responda a uma pesquisa", completed: false, imageSent: false, size: 2},
        { id: 3, text: "Compartilhe o app nas redes", completed: false, imageSent: false, size: 2},
        { id: 4, text: "Pesquisa de Preferências de Compra", completed: false, imageSent: false, size: 2},
        { id: 5, text: "Pesquisa de Preferências por Recompensas", completed: false, imageSent: false, size: 2},
        { id: 6, text: "Pesquisa de Satisfação com Lojas", completed: false, imageSent: false, size: 2}
    ]);
    const [weeklyTasks, setWeeklyTasks] = useState([
        { id: 1, text: "Visite o Shopping 3 vezes na semana", completed: false, imageSent: false, size: 1},
        { id: 2, text: "Compre em qualquer loja participante", completed: false, imageSent: false, size: 2},
        { id: 3, text: "Convide um amigo para se inscrever no Viva ", completed: false, imageSent: false, size: 2},
        { id: 4, text: "Pesquisa de Preferências de Compra", completed: false, imageSent: false, size: 2},
        { id: 5, text: "Pesquisa de Preferências por Recompensas", completed: false, imageSent: false, size: 2},
        { id: 6, text: "Pesquisa de Satisfação com Lojas", completed: false, imageSent: false }
    ]);

    const [weeklyPoints, setWeeklyPoints] = useState([
        { id: 1, text: "+5"},
        { id: 2, text: "+15"},
        { id: 3, text: "+25"},
        { id: 4, text: "+50"},
        { id: 5, text: "+50"},
        { id: 6, text: "+50"}
    ]);

    const [dailyPoints, setDailyPoints] = useState([
        { id: 1, text: "+100"},
        { id: 2, text: "+50"},
        { id: 3, text: "+30"},
        { id: 4, text: "+50"},
        { id: 5, text: "+50"},
        { id: 6, text: "+50"}
    ]);
    const [dailyCode, setDailyCode] = useState("");

    const handleSendCode = () => {
        setIsVerifying(false);
        setIsCodeSent(true);
    };
    const handleSendCode2 = () => {
        setIsCodeSent2(true);
    };

    const handleQRCodeScan = () => {
        setIsQRCodeScanned(true);
        setIsVerifying(false);
    };

    const handleImageSend = (task) => {
        task.completed = true;
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

    const focusDailyCodeInput = () => {
        dailyCodeInputRef.current?.focus();
    };
    
    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        >
        <ScrollView>
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
                                    <TouchableOpacity style={styles.qrcodeButton} onPress={handleQRCodeScan} >
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
                        <>
                            {tasks.slice(0, 3).map((task) => (
                                <View key={task.id} style={styles.taskContainer}>
                                    <View style={styles.taskContent}>
                                        <CustomCheckbox isChecked={task.completed} onPress={() => handleTaskCheck(task)} />
                                        <Text style={styles.taskText}>{task.text}</Text>
                                        {!task.imageSent && (
                                            <>
                                            <Text style={[styles.pointsText, { left: task.size === 3 ? 272 : 280 }]}>
                                                {dailyPoints.find((point) => point.id === task.id)?.text}
                                            </Text>
                                            <View style={styles.iconPosition}>
                                                
                                                <TouchableOpacity onPress={() => handleImageSend(task)}>
                                                    <QrCode2 width="20" height="20"/>
                                                </TouchableOpacity>
                                            </View>
                                            </>
                                        )}
                                    </View>
                                    <View style={styles.lineView} />
                                </View>
                            ))}
                            <Text style={styles.searchTasks}>Responda às pesquisas</Text>
                            {tasks.slice(3).map((task) => (
                                <View key={task.id} style={styles.taskContainer}>
                                    <View style={styles.taskContent}>
                                        <CustomCheckbox isChecked={task.completed} onPress={() => handleTaskCheck(task)} />
                                        <Text style={styles.taskText}>{task.text}</Text>
                                        {!task.imageSent && (
                                            <Text style={styles.pointsText2}>{dailyPoints.find((point) => point.id === task.id)?.text}</Text>
                                        )}
                                    </View>
                                    <View style={styles.lineView} />
                                </View>
                            ))}
                        </>
                ) : (
                        <>
                            {weeklyTasks.slice(0, 3).map((task) => (
                                <View key={task.id} style={styles.taskContainer}>
                                    <View style={styles.taskContent}>
                                        <CustomCheckbox isChecked={task.completed} onPress={() => handleTaskCheck(task)} />
                                        <Text style={styles.taskText}>{task.text}</Text>
                                        {!task.imageSent && (
                                            <>
                                            <Text style={[styles.pointsText, { left: task.size === 1 ? 287 : 280 }]}>
                                                {weeklyPoints.find((point) => point.id === task.id)?.text}
                                            </Text>
                                            <View style={styles.iconPosition}>
                                                <TouchableOpacity onPress={() => handleImageSend(task)}>
                                                    <QrCode2 width="20" height="20" />
                                                </TouchableOpacity>
                                            </View>
                                            </>
                                        )}
                                    </View>
                                    <View style={styles.lineView} />
                                </View>
                            ))}
                            <Text style={styles.searchTasks}>Responda às pesquisas</Text>
                            {weeklyTasks.slice(3).map((task) => (
                                <View key={task.id} style={styles.taskContainer}>
                                    <View style={styles.taskContent}>
                                        <CustomCheckbox isChecked={task.completed} onPress={() => handleTaskCheck(task)} />
                                        <Text style={styles.taskText}>{task.text}</Text>
                                        {!task.imageSent && (
                                            <Text style={styles.pointsText2}>{weeklyPoints.find((point) => point.id === task.id)?.text}</Text>
                                        )}
                                    </View>
                                    <View style={styles.lineView} />
                                </View>
                            ))}
                        </>
                )}
                
            </View>
            <View style={styles.dailyCodeContainer}>
                <Text style={styles.dailyCodeTitle}>#vemdeviva</Text>
                <Text style={styles.dailyCodeDescription}>Insira o código de indicação e reivindique seu prêmio</Text>
                {isCodeSent2 ? (
                        <Text style={styles.codeSentMessage}>Código enviado com sucesso!</Text>
                    ) : (
                    <>
                    <TextInput
                        style={styles.dailyCodeInput}
                        value={dailyCode}
                        onChangeText={setDailyCode}
                        onFocus={focusDailyCodeInput}
                    />
                    <TouchableOpacity style={styles.sendButton} onPress={handleSendCode2}>
                        <Text style={styles.sendButtonText}>Enviar</Text>
                    </TouchableOpacity>
                    </>
                )}
            </View>
        </View>
        </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#76B9D3",
        marginBottom: 150,
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
        marginBottom: 10,
        gap: 25
    },
    comprimento: {
        flexDirection: "column",
    },
    headerImage: {
        width: 75,
        height: 75,
        borderRadius: 45.5,
        borderWidth: 2,  
        borderColor: 'white'
    },
    shadowContainer: {
        paddingTop: 8,
        marginLeft: 110,
        marginRight: 30,
        width: 91,
        height: 91,
        borderRadius: 45.5,
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
        padding: 10,
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
        fontSize: 17,
        color: "#e24443",
        fontWeight: "700"
    },
    activeSectionTitleBlue: {
        fontSize: 17,
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
    searchTasks: {
        fontSize: 16,
        fontWeight: "500",
        color: "#3c3a3a",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 6,
        marginBottom: 15
    },
    iconPosition: {
        position: 'absolute',
        zIndex: 1,
        left: 320,
    },
    cameraIcon: {
        width: 5,
        height: 5,
    },
    pointsText: {
        position: 'absolute',
        left: 280,
        fontSize: 16,
        color: '#E24443',
        fontWeight: 'bold'
    },
    pointsText2: {
        position: 'absolute',
        left: 300,
        fontSize: 16,
        color: '#E24443',
        fontWeight: 'bold'
    },
    dailyCodeContainer: {
        padding: 20,
        backgroundColor: "#B1B1B1",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 20,
        gap: 15
    },
    dailyCodeInput: {
        flex: 1,
        height: 40,
        borderRadius: 5,
        backgroundColor: '#f3f3f3',
        fontSize: 12, 
        backgroundColor: "white",
        marginRight: 10,
        width: 220,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 4,
        elevation: 4,
        shadowOpacity: 0.2,
    },
    dailyCodeTitle: {
        fontSize: 24,
        fontWeight: "700",
        color: "#fe3131",
        textAlign: "center",
    },
    dailyCodeDescription: {
        width: 219,
        fontSize: 16,
        color: "#fff",
        textAlign: "center",
    }
});

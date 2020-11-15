import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Header, InputChat, ChatItem} from '../../components';
import {
  fonts,
  colors,
  getData,
  showError,
  getChatTime,
  setChatDate,
} from '../../utils';
import {Fire} from '../../config';

const Chatting = ({navigation, route}) => {
  const dataDocter = route.params;
  const [ChatContent, setChatContent] = useState('');
  const [user, setUser] = useState({});
  const [chatData, setChatData] = useState([]);
  useEffect(() => {
    getDataUserFromLocal();
    const chatID = `${user.uid}_${dataDocter.data.uid}`;
    const urlFirebase = `chatting/${chatID}/allChat/`;
    Fire.database()
      .ref(urlFirebase)
      .on('value', (snapshot) => {
        if (snapshot.val()) {
          const dataSnapshot = snapshot.val();
          const allDataChat = [];
          Object.keys(dataSnapshot).map((key) => {
            const dataChat = dataSnapshot[key];
            const newDataChat = [];
            Object.keys(dataChat).map((itemChat) => {
              newDataChat.push({
                id: itemChat,
                data: dataChat[itemChat],
              });
            });
            allDataChat.push({
              id: key,
              data: newDataChat,
            });
          });
          setChatData(allDataChat);
        }
      });
  }, [dataDocter.data.id, user.uid]);
  const getDataUserFromLocal = () => {
    getData('user').then((res) => {
      setUser(res);
    });
  };
  const chatSend = () => {
    const today = new Date();
    const data = {
      sendBy: user.uid,
      chatDate: today.getTime(),
      chatTime: getChatTime(today),
      chatContent: ChatContent,
    };
    const chatID = `${user.uid}_${dataDocter.data.uid}`;
    const urlFirebase = `chatting/${chatID}/allChat/${setChatDate(today)}`;
    const urlMessageUser = `messages/${user.uid}/${chatID}`;
    const urlMessageDoctor = `messages/${dataDocter.data.uid}/${chatID}`;
    const dataHistoryChatForUser = {
      lastContentChat: ChatContent,
      lastChatDate: today.getTime(),
      uidPartner: dataDocter.data.uid,
    };
    const dataHistoryChatForDoctor = {
      lastContentChat: ChatContent,
      lastChatDate: today.getTime(),
      uidPartner: user.uid,
    };
    Fire.database()
      .ref(urlFirebase)
      .push(data)
      .then(() => {
        setChatContent('');
        Fire.database().ref(urlMessageUser).set(dataHistoryChatForUser);
        Fire.database().ref(urlMessageDoctor).set(dataHistoryChatForDoctor);
      })
      .catch((err) => {
        showError(err.message);
      });
  };
  return (
    <View style={styles.page}>
      <Header
        type="dark-profile"
        title={dataDocter.data.fullName}
        photo={{uri: dataDocter.data.photo}}
        desc={dataDocter.data.category}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {chatData.map((chat) => {
            return (
              <View key={chat.id}>
                <Text style={styles.chatDate}>{chat.id}</Text>
                {chat.data.map((itemChat) => {
                  const isMe = itemChat.data.sendBy === user.uid;
                  return (
                    <ChatItem
                      key={itemChat.id}
                      isme={isMe}
                      text={itemChat.data.chatContent}
                      date={itemChat.data.chatTime}
                      photo={isMe ? null : {uri: dataDocter.data.photo}}
                    />
                  );
                })}
              </View>
            );
          })}
        </ScrollView>
      </View>
      <InputChat
        value={ChatContent}
        onChangeText={(value) => setChatContent(value)}
        onButtonPress={chatSend}
      />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {flex: 1},
  chatDate: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginVertical: 20,
    textAlign: 'center',
  },
});

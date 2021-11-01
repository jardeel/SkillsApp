import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Platform,
  FlatList,
} from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData {
  id: string,
  name: string,
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGretting] = useState('');

  function handleAddNewSkill(){
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    }

    setMySkills([...mySkills, data]);
  }

  function handleRemoveSkill(id: string){
    setMySkills(oldState => oldState.filter(
      skill => skill.id !== id
    ));
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if(currentHour < 12){
      setGretting('Good morning');
    }else if(currentHour >= 12 && currentHour < 18){
      setGretting('Good afternoon');
    }else{
      setGretting('Good night');
    }
  },[greeting]);

  return(
    <View style={styles.container}>

      <Text style={styles.title}>
        Welcome, Jardel
      </Text>

      <Text style={styles.greetings}>
        {greeting}
      </Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill}>Add</Button>

      <Text style={[styles.title, { marginVertical: 50}]}>
        My Skills
      </Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkillCard 
            skill={item.name} 
            onPress={() => handleRemoveSkill(item.id)}  
          />
        )}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  title: {
    color: '#FFF', 
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15: 10,
    marginTop: 30,
    borderRadius: 7,
  },
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10,
  },
  textSkill: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  greetings: {
    color: '#FFF'
  }
});


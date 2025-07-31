import React from 'react';
import { FontAwesome6 } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

// ---
// Data Definitions
// ---
interface IconData {
  name: string; // diperbaiki: cukup pakai string agar tidak error di TypeScript
  label: string;
}

const expressiveIcons: IconData[] = [
  { name: 'angry', label: 'Setan Kemarahan' },
  { name: 'grin-stars', label: 'Senyum Berbintang' },
  { name: 'grin-tongue-squint', label: 'Senyum nakal' },
  { name: 'flushed', label: 'Wajah bingung' },
  { name: 'kiss-beam', label: 'Ciuman Berseri-seri' },
  { name: 'dizzy', label: 'Mantra Pusing' },
  { name: 'kiss', label: 'Ciuman Manis' },
  { name: 'grin-wink', label: 'Mantra Mengedipkan Mata' },
  { name: 'grin', label: 'Seringai Klasik' },
  { name: 'frown-open', label: 'Penghinaan Terbuka' }
];

// ---
// Sub-Components
// ---
interface IconCardProps {
  icon: IconData;
}

const IconCard: React.FC<IconCardProps> = ({ icon }) => {
  const isValidIcon = typeof icon.name === 'string' && icon.name.length > 0;

  return (
    <View style={styles.iconWrapper}>
      <View style={styles.circularIconCard}>
        {isValidIcon ? (
          <FontAwesome6 name={icon.name as any} size={40} color="#6a0572" />
        ) : (
          <Text style={{ fontSize: 40, color: '#6a0572' }}>?</Text>
        )}
      </View>
      <Text style={styles.circularIconLabel}>{icon.label}</Text>
    </View>
  );
};

// ---
// Main Component
// ---
export default function Index() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <Text style={styles.title}>Ekspresi Dinamis</Text>
      <Text style={styles.subtitle}>Kumpulan ikon ekspresif</Text>

      <View style={styles.circularLayout}>
        {expressiveIcons.map((icon, idx) => (
          <IconCard key={icon.name + '-' + idx} icon={icon} />
        ))}
      </View>
    </ScrollView>
  );
}

// ---
// Styles
// ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#84e5f1ff',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 10,
    color: '#6905acff',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#666c8aff',
  },
  circularLayout: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 20,
    minHeight: 300,
    marginHorizontal: -5,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  iconWrapper: {
    alignItems: 'center',
    margin: 10,
    width: 100,
  },
  circularIconCard: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#976aaaff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#976cfbff',
  },
  circularIconLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#37589fff',
    textAlign: 'center',
    marginTop: 6,
  },
});

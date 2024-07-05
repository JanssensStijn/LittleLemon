import { useState } from "react";
import { Pressable, SectionList,  StyleSheet, Text, View } from "react-native";

const menuItemsToDisplay = [
    {
      title: 'Appetizers',
      data: [
        { name: 'Hummus', price: '$5.00', id: '1A' },
        { name: 'Moutabal', price: '$5.00', id: '2B' },
        { name: 'Falafel', price: '$7.50', id: '3C' },
        { name: 'Marinated Olives', price: '$5.00', id: '4D' },
        { name: 'Kofta', price: '$5.00', id: '5E' },
        { name: 'Eggplant Salad', price: '$8.50', id: '6F' },
      ],
    },
    {
      title: 'Main Dishes',
      data: [
        { name: 'Lentil Burger', price: '$10.00', id: '7G' },
        { name: 'Smoked Salmon', price: '$14.00', id: '8H' },
        { name: 'Kofta Burger', price: '$11.00', id: '9I' },
        { name: 'Turkish Kebab', price: '$15.50', id: '10J' },
      ],
    },
    {
      title: 'Sides',
      data: [
        { name: 'Fries', price: '$3.00', id: '11K' },
        { name: 'Buttered Rice', price: '$3.00', id: '12L' },
        { name: 'Bread Sticks', price: '$3.00', id: '13M' },
        { name: 'Pita Pocket', price: '$3.00', id: '14N' },
        { name: 'Lentil Soup', price: '$3.75', id: '15O' },
        { name: 'Greek Salad', price: '$6.00', id: '16Q' },
        { name: 'Rice Pilaf', price: '$4.00', id: '17R' },
      ],
    },
    {
      title: 'Desserts',
      data: [
        { name: 'Baklava', price: '$3.00', id: '18S' },
        { name: 'Tartufo', price: '$3.00', id: '19T' },
        { name: 'Tiramisu', price: '$5.00', id: '20U' },
        { name: 'Panna Cotta', price: '$5.00', id: '21V' },
      ],
    },
  ];
  
type SectionProps = {
    title: string;
    data: ItemProps[];
};
type ItemProps = {
    name: string;
    price: string;
    id: string;
};

const Item = ({item}: {item: ItemProps}) => {
    return(
    <View style={menuStyles.ItemBox}>
        <Text style={menuStyles.itemText}>{item.name}</Text>
        <Text style={menuStyles.itemText}>{item.price}</Text>
    </View>
    );
};

const Separator = () => <View style={menuStyles.Separator}/>;
const Header = () => <Text style={menuStyles.headerText}>View Menu</Text>;
const Footer = () => <Text style={menuStyles.footerText}>All rights reserved by Little Lemon, 2024</Text>;

export const MenuScreen = () => {
  const [showMenu, setShowMenu] = useState(false);

  const renderItem = ({item}: {item: ItemProps}) => <Item item={item}/>
  const renderSectionHeader = ({section: {title}}: {section: SectionProps}) => <Text style={menuStyles.sectionHeader}>{title}</Text>;

  return (
    <View style={menuStyles.container}>
      {!showMenu && (
        <Text style={menuStyles.infoSection}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. View our
          menu to explore our cuisine with daily specials!
        </Text>
      )}
      <Pressable
        style={menuStyles.button}
        onPress={() => setShowMenu(prevState => !prevState)}>
        <Text style={menuStyles.buttonText}>
          {showMenu ? 'Home' : 'View Menu'}
        </Text>
      </Pressable>
      {showMenu && (
        <SectionList
          keyExtractor={(item, index) => item.id}
          sections={menuItemsToDisplay}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          ListFooterComponent={Footer}
          ItemSeparatorComponent={Separator}></SectionList>
      )}
    </View>
  );
};

const menuStyles = StyleSheet.create({
    container: {
        flex: 0.75,
        padding: 24,
    },
    headerText: {
        fontSize: 40,
        flexWrap: 'wrap',
        color: '#EDEFEE',
        justifyContent: 'center',
        textAlign: 'center',
    },
    footerText: {
        fontSize: 20,
        flexWrap: 'wrap',
        color: '#EDEFEE',
        justifyContent: 'center',
        textAlign: 'center',
    },
    ItemBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemText: {
        fontSize: 20,
        color: '#F4CE14',
        paddingVertical: 20,
    },
    Separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#F4CE14',
    },
    sectionHeader: {
        fontSize: 24,
        color: 'black',
        backgroundColor: '#EE9972',
        textAlign: 'center',
    },
    button: {
      fontSize: 22,
      padding: 10,
      marginVertical: 8,
      margin: 40,
      backgroundColor: '#EDEFEE',
      borderColor: '#EDEFEE',
      borderWidth: 2,
      borderRadius: 12
    },
    buttonText: {
      color: '#333333',
      textAlign: 'center',
      fontSize: 32,
    },
    infoSection: {
      fontSize: 24,
      padding: 20,
      marginVertical: 8,
      color: '#EDEFEE',
      textAlign: 'center',
      backgroundColor: '#495E57',
    },
});
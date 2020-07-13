**_Core Component: FlatList_**

    FlatList only renders the content on screen, and only update row that have changed. The FlatList
    is built using a more generic coomponent, ScrollView.


    FlatList renders each item in `data` prop using the `renderItem` prop.

**props**

    keyExtractor: item => item.id
    renderItem: ({ item }) => <Component name = {item.name} />

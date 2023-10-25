function initial(name) {
    return name[0];
}



test ( "Testing" , () => {
    expect(initial("Javi")).toBe("J")
})
function solve(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList,
                this.name = name,
                this.time = time
        }
    }
    let songs = [];
    let numOfSongs = input.shift();
    let givenTypeList = input.pop();
    for (let index = 0; index < numOfSongs; index++) {
        let [typeList, name, time] = input[index].split('_');
        let song = new Song(typeList, name, time);
        songs.push(song);
    }
    if (givenTypeList === 'all') {
        songs.forEach((i) => console.log(i.name));
    } else {
        let output = songs.filter((i) => i.typeList === givenTypeList);
        output.forEach((i) => console.log(i.name));
    }
}
solve([2,

    'like_Replay_3:15',
    
    'ban_Photoshop_3:48',
    
    'all'])

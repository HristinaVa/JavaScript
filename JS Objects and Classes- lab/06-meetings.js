function solve(input) {
    let meeting = [];
    let seenDays = new Set();
    for (const entry of input) {
        let [day, name] = entry.split(' ');
        if (seenDays.has(day)) {
            console.log(`Conflict on ${day}!`);
            continue;
        }
        seenDays.add(day);
        meeting.push({ day, name });
        console.log(`Scheduled for ${day}`);

    }
    for (let index = 0; index < meeting.length; index++) {
        const element = meeting[index];
        // console.log(`${meeting[day]} -> ${meeting[name]}}`);
        console.log(`${element.day} -> ${element.name}`);
    }
}

function createAssemblyLine(){
    const objest = {
        hasClima(carObject){
            carObject['temp'] = 21;
            carObject['tempSetting'] = 21;
            carObject['adjustTemp'] = ()=> {
                if (this.temp< this.tempSetting) {
                    this.temp++;
                }else if (this.temp> this.tempSetting) {
                    this.temp--;
                }
            }
        },

        hasAudio(carObject){
            carObject['currentTrack'] = {},
            carObject['nowPlaying'] = () => {
                if (carObject.currentTrack.name !== null && carObject.currentTrack.artist !== null) {
                    console.log(`Now playing '${carObject.currentTrack.name}' by ${carObject.currentTrack.artist}`);
                }
            }
        },

        hasParktronic(carObject){
            carObject['checkDistance'] = (distance) => {
                let message = '';
            }
            if (this.distance <0.1) {
                message = 'Beep! Beep! Beep!';
            }else if (this.distance<0.25) {
                message = 'Beep! Beep!';
            }else if (this.distance<0.5) {
                message = 'Beep!';
            }
        }    
    };
    return objest
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis',

};

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar);
function solve(input) {

    let collection = [];

    const utilityObj = {

        add,
        remove,
        print

    }

    function add(element) {

        collection.push(element);

    }

    function remove(element) {

        collection = collection.filter(e => e !== element);

    }

    function print() {

        console.log(collection.join(','));

    }

    input.forEach(command => {

        let [cmd, string] = command.split(' ');

        switch(cmd) {

            case "add":
                utilityObj.add(string);
                break;
            case "remove":
                utilityObj.remove(string);
                break;
            case "print":
                utilityObj.print();
                break;
        }
    });
}
solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])
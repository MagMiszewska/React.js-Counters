var Counter = React.createClass({
    getInitialState: function () {
        return {
            counter: 0
        };
    },

    increment: function () {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function () {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    getDefaultProps: function () {
        console.log('Ustawia domyślne wartości propsów, które nie zostały przekazane do komponentu');
    },

    componentWillMount: function () {
        console.log('Inicjalizacja komponentu przed wykonaniem render');
    },

    componentDidMount: function () {
        console.log('Wywoływana po wykonaniu render, możemy wykonywać na nim różne operacje manipulacji, używać jQuery albo też pobrać dane');
    },

    componentWillReceiveProps: function () {
        console.log('Aktualizuje stan na podstawie nadchodzących właściwości');
    },

    shouldComponentUpdate: function () {
        console.log('Pozwala sprawdzić czy faktycznie trzeba jeszcze raz przerysować komponent, zwracana jest wartość true/false');
        return true;
    },

    componentWillUpdate: function () {
        console.log('Gdy poprzednia metoda zwróci true, przygotowanie na przerenderowanie');
    },

    componentDIdUpdate: function () {
        console.log('Manipulacje na DOM po przerysowaniu komponentu');
    },

    componentWillUnmount: function () {
        console.log('Posprzątanie przed usunięciem komponentu, możemy wykonywać wszystkie rzeczy związane z odpinaniem timerów czy nasłuchiwania zdarzeń na elementach DOM');
    },

    render: function () {
        return React.createElement('div', { className: 'container' },
            React.createElement('button', {
                className: 'btn btn-lg btn-warning',
                onClick: this.decrement
            }, 'Odejmij (-1)'),
            React.createElement('span', {}, 'wynik: ' + this.state.counter),
            React.createElement('button', {
                className: 'btn btn-lg btn-info',
                onClick: this.increment
            }, 'Dodaj (+1)'),
        );
    }
});

var element = React.createElement('div', {},
    React.createElement('h1', {}, 'Dodaj lub odejmij'),
    React.createElement(Counter, {}),
    React.createElement(Counter, {}),
    React.createElement(Counter, {})
);
ReactDOM.render(element, document.getElementById('app'));
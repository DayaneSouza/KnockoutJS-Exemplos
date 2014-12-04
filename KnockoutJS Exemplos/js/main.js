
/* ------------EXEMPLO 1 -------------*/

/*function AppViewModel() {    
    this.firstName = "Dayane";
    this.lastName = "Souza";
}

// Ativa knockout.js
ko.applyBindings(new AppViewModel());*/

// KO Apply Bindings serve para chamar o Knockout





/* ------------EXEMPLO 2 -------------*/

/*function AppViewModel() {

    //Observaveis São propriedades que automaticamente irá emitir uma notificação sempre que houver alteração de valor.

    this.firstName = ko.observable("Dayane");
    this.lastName = ko.observable("Souza");
    
}

// Ativa knockout.js
ko.applyBindings(new AppViewModel());*/





/* ------------EXEMPLO 3 -------------*/

/*function AppViewModel() {
    this.firstName = ko.observable("Dayane");
    this.lastName = ko.observable("Souza");

    //Computed Especifica como deve ser calculado o valor.

    this.fullName = ko.computed(function() { //
        return this.firstName() + " " + this.lastName();    
    }, this);
}

// Ativa knockout.js
ko.applyBindings(new AppViewModel());*/




/* ------------EXEMPLO 4 -------------*/

function AppViewModel() {
    this.firstName = ko.observable("Dayane");
    this.lastName = ko.observable("Souza");

    this.fullName = ko.computed(function() {
        return this.firstName() + " " + this.lastName();    
    }, this);

    //Capitalize Last Name função da View Model para implementar o comportamento

    this.capitalizeLastName = function() {
        var currentVal = this.lastName();        // Leia o valor atual
        this.lastName(currentVal.toUpperCase()); // Escreve de volta um valor modificado
    };    
}

// Ativa knockout.js
ko.applyBindings(new AppViewModel());

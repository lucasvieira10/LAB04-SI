var FormatarAgenda = function(agenda, tarefas) {
    var self = this;

    self.formatar = function() {
            return ('------ ' + agenda.nome + ' ------\n\n' +
                'Tarefas para cumprir: ' + agenda.tarefasParaCumprir + '\n' +
                'Tarefas ja concluidas: ' + agenda.tarefasJaConcluidas + '\n\n' +
                '------ Tarefas ------\n\n' + tarefasFormatadas());
    };

    var tarefasFormatadas = function() {
        var formatadas = '';

        for (var i in tarefas) {
            formatadas += 'Nome: ' + tarefas[i].nome + ' | Prioridade: ' + tarefas[i].prioridade + '\n';
        }

        return formatadas;
    };
};

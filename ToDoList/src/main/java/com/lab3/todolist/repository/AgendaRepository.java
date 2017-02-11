package com.lab3.todolist.repository;

import com.lab3.todolist.models.Agenda;
import org.springframework.data.repository.CrudRepository;

public interface AgendaRepository extends CrudRepository<Agenda, String> {

    Agenda findById(String id);
}

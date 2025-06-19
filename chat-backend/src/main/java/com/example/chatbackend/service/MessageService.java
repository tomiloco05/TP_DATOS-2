package com.example.chatbackend.service;

import com.example.chatbackend.model.Message;
import com.example.chatbackend.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class MessageService {
    @Autowired
    private MessageRepository repository;

    public Message save(Message msg) {
        msg.setTimestamp(LocalDateTime.now());
        return repository.save(msg);
    }

    public List<Message> findAll() {
        return repository.findAll();
    }

    public List<Message> findBySender(String sender) {
        return repository.findBySender(sender);
    }

    public List<Message> findByReceiver(String receiver) {
        return repository.findByReceiver(receiver);
    }
}

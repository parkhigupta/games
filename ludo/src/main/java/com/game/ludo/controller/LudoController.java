package com.game.ludo.controller;

import com.game.ludo.service.LudoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import lombok.extern.slf4j.Slf4j;

@RequestMapping("/ludo")
@RestController
@Slf4j
public class LudoController {

    @Autowired
    LudoService ludoService;

    @RequestMapping("/home")
    public String home() {
        return "home";
    }

    @RequestMapping("playGame")
    public void playGame(){
        ludoService.playGame();
    }
}

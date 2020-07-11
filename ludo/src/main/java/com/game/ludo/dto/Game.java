package com.game.ludo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Game {

    String[][] board = new String[15][15];
    List<Player> players = new ArrayList<>();
    List<Token> tokens = new ArrayList<>();
}

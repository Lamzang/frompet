import React from "react";
import { ScrollView } from "react-native";
import { profile, stories } from "../data";
import Story from "./Story";

export default function Stories() {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <Story
        name="홍길동"
        avatar={profile.avatar}
        isCreateStory={true}
        isSeen={false}
      />

      {stories.map((story: any) => (
        <Story
          key={story.id.toString()}
          name={story.name}
          avatar={story.avatar}
          isSeen={story.isSeen}
        />
      ))}
    </ScrollView>
  );
}

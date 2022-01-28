import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { useQuery, gql } from '@apollo/client';

import { MissionItem } from './CompanyScreenStyles';

const CompanyScreen = () => {
  const COMPANY = gql`
    query Company {
      missions {
        description
        id
        name
      }
    }
  `;

  const { data } = useQuery(COMPANY);

  return (
    <ScrollView>
      <View>
        {data?.missions.map((item) => (
          <MissionItem key={item.id}>
            <Text>{item.name}</Text>
          </MissionItem>
        ))}
      </View>
    </ScrollView>
  );
};

export default CompanyScreen;

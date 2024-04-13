import { ActivityIndicator, SafeAreaView, Text } from 'react-native';
import useFetcher from '../../utils/useFetcher';
import { useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import { useAccountMode, usePermissions, useShowNavBar } from '../../context';
import { useRouter } from 'expo-router';

export default function HomeRoot() {
  const router = useRouter();

  const [selectedDb, setSelectedDb] = useState<string>('');
  const [token, setToken] = useState<string>('');
  const setStudentsList = useAccountMode((state) => state.setStudentsList);
  const setStudent = useAccountMode((state) => state.setStudent);
  const setPermissions = usePermissions((state) => state.setPermissions);
  const setNavbarVisibility = useShowNavBar(
    (state) => state.setNavbarVisibility
  );

  const { data, status, loading, error, fetchData, loadingHandler } =
    useFetcher({
      resource: '/responsibles/students',
      method: 'get',
      configs: {
        headers: {
          selecteddb: selectedDb,
          authentication: token,
        },
      },
    });

  const {
    data: studentData,
    status: studentStatus,
    loading: studentLoading,
    error: studentError,
    fetchData: studentFetchData,
    loadingHandler: studentLoadingHandler,
  } = useFetcher({
    resource: '/students',
    method: 'get',
    configs: {
      headers: {
        selecteddb: selectedDb,
        authentication: token,
      },
    },
  });

  const {
    data: permissionsData,
    status: permissionsStatus,
    loading: permissionsLoading,
    error: permissionsError,
    fetchData: permissionsFetchData,
    loadingHandler: permissionsLoadingHandler,
  } = useFetcher({
    resource: '/responsibles/permissions',
    method: 'get',
    configs: {
      headers: {
        selecteddb: selectedDb,
        authentication: token,
      },
    },
  });

  useEffect(() => {
    (async function () {
      const dbName = await SecureStore.getItemAsync('db_name');
      const jwt = await SecureStore.getItemAsync('token');
      setSelectedDb(dbName as string);
      setToken(jwt as string);
    })();
  }, []);

  useEffect(() => {
    if (!loading && !permissionsLoading && !studentLoading) {
      setStudentsList(data);
      setPermissions(permissionsData);
      if (
        !data.length &&
        Object.values(permissionsData).every((e) => e === 0)
      ) {
        setStudent(studentData[0]);
      }
      setNavbarVisibility(true);
      router.replace('/home/fragments/news');
    }
  }, [loading, permissionsLoading, studentLoading]);

  useEffect(() => {
    if (selectedDb && token) {
      fetchData();
      permissionsFetchData();
      studentFetchData();
    }
  }, [selectedDb, token]);

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <ActivityIndicator size={'large'} />
    </SafeAreaView>
  );
}
